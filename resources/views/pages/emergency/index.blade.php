@php
    $configData = Helper::appClasses();
@endphp

@extends('layouts/layoutMaster')

@section('title', 'Emergency Callls')

@section('content')
    <h1>Panggilan Darurat</h1>

    <table id="datatable">
        <thead>
            <!-- Definisi Kolom -->
            <tr>
                <th>No</th>
                <th>Waktu</th>
                <th>Nama</th>
                <th>Phone</th>
                <th>Jenis</th>
                <th>Status</th>
                <th>Posisi</th>
                <th>Aksi</th>
            </tr>
        </thead>
    </table>

    <!-- Add this modal HTML structure to your page -->
    <div class="modal fade" id="emergencyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog"
        aria-labelledby="emergencyModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="emergencyModalLabel">Emergency Alert</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="/assets/gif/siren.gif" />
                    <p>Emergency! Please stay alert.</p>
                </div>
                <button type="button" id="pickOffBtn" class="btn btn-xl btn-warning" data-dismiss="modal">Pickof</button>
                <div class="modal-footer">
                    {{-- <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button> --}}
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')
    <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
    <script>
        // Enable pusher logging - don't include this in production
    </script>
    <script>
        $(document).ready(function() {
            $('#datatable').DataTable({
                processing: true,
                paggination: true,
                responsive: false,
                serverSide: true,
                searching: true,
                ordering: true,
                ajax: {
                    url: "{{ route('emergency') }}"
                },
                columns: [{
                    data: "id",
                    name: "id"
                }, {
                    data: "created_at",
                    name: "created_at"
                }, {
                    data: "name",
                    name: "name"
                }, {
                    data: "phone",
                    name: "phone"
                }, {
                    data: "emergency_name",
                    name: "emergency_name"
                }, {
                    data: "status",
                    name: "status"
                }, {
                    data: "posisi",
                    name: "posisi"
                }, {
                    data: "aksi",
                    name: "aksi"
                }, ]
            });;

            var currenPickOff = null;
            Pusher.logToConsole = true;

            var pusher = new Pusher('015992b9da4e10077122', {
                cluster: 'ap1'
            });


            var channel = pusher.subscribe('emergency-channel');
            channel.bind('emergency-event', function(data) {
                // alert(JSON.stringify(data));
                newData(data)
            });

            var audio = new Audio('/assets/sound/siren1.mp3');
            audio.load();


            // Function to pause the audio
            function pauseAudio() {
                audio.pause();
            }
            // Optional: You can also add a stop button to completely stop the audio


            // Function to stop the audio
            function stopAudio() {
                audio.pause();
                audio.currentTime = 0; // Reset the audio to the beginning
            }

            function newData(d) {
                console.log(d)
                $.ajax({
                    url: "{{ route('get-emergency') }}",
                    type: "get",
                    data: {
                        'id_request': d['idRequest']
                    },
                    success: (data) => {
                        console.log(data)
                        if (data['error']) {
                            newData(d);
                            alert("Koneksi Terputus, lakukan refres halaman")
                            return;
                        }
                        currenPickOff = d['idRequest']
                        $('#emergencyModal').modal('show');
                        audio.play()
                        audio.addEventListener('ended', function() {
                            audio.play()
                        });

                        console.log(currenPickOff)
                        document.getElementById('pickOffBtn').addEventListener('click', function() {
                            $('#emergencyModal').modal('hide');
                            window.open("{{ url('emergency/') }}/" + currenPickOff,
                                '_blank');
                            stopAudio();
                        });
                    },
                    error: () => {
                        // buttonIdle(submitBtn);
                    }
                });

            }
            newData({
                'idRequest': 4004
            })
        });
    </script>
@endpush
