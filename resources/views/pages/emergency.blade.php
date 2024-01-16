@php
    $configData = Helper::appClasses();
@endphp

@extends('layouts/layoutMaster')

@section('title', 'Emergency Callls')

@section('content')
    <h1>Pusher Test</h1>
    <p>
        Try publishing an event to channel <code>my-channel</code>
        with event name <code>my-event</code>.
    </p>

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
@endsection

@push('scripts')
    <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
    <script>
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher('015992b9da4e10077122', {
            cluster: 'ap1'
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
            alert(JSON.stringify(data));
        });
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
        });
    </script>
@endpush
