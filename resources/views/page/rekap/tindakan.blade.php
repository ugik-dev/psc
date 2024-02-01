@php
    $configData = Helper::appClasses();
@endphp

@extends('layouts/layoutMaster')

@section('title', 'Pengguna Aplikasi')

@section('content')
    <table id="datatable">
        <thead>
            <!-- Definisi Kolom -->
            <tr>
                <th>No</th>
                <th>Waktu Login</th>
                <th>Nama</th>
                <th>Phone</th>
                <th>Aksi</th>
            </tr>
        </thead>
    </table>
@endsection

@push('scripts')
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
                    url: "{{ route('rekap.tindakan') }}"
                },
                columns: [{
                    data: "id",
                    name: "id"
                }, {
                    data: "created_at",
                    name: "created_at"
                }, {
                    data: "nama_pasien",
                    name: "nama_pasien"
                }, {
                    data: "umur",
                    name: "umur"
                }, {
                    data: "aksi",
                    name: "aksi"
                }, ]
            });
            // <th>No</th>
            //     <th>Waktu Login</th>
            //     <th>Nama</th>
            //     <th>Phone</th>
            //     <th>Aksi</th>
            // let table = new DataTable('#datatable');
        });
    </script>
@endpush
