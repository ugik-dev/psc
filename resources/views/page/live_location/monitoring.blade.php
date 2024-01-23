{{-- @extends('layouts/layoutMaster')

@section('title', 'eCommerce Order Details - Apps')

@section('vendor-style')
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/sweetalert2/sweetalert2.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/@form-validation/umd/styles/index.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/select2/select2.css') }}" />
@endsection

@section('vendor-script')
    <script src="{{ asset('assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/sweetalert2/sweetalert2.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/cleavejs/cleave.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/cleavejs/cleave-phone.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/@form-validation/umd/bundle/popular.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/@form-validation/umd/plugin-bootstrap5/index.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/@form-validation/umd/plugin-auto-focus/index.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/select2/select2.js') }}"></script>
@endsection

@section('page-script')
    <script src="{{ asset('assets/js/app-ecommerce-order-details.js') }}"></script>
    <script src="{{ asset('assets/js/modal-add-new-address.js') }}"></script>
    <script src="{{ asset('assets/js/modal-edit-user.js') }}"></script>
@endsection

@section('content')




    <!-- Order Details Table -->



    <!-- Modals -->
    @include('_partials/_modals/modal-edit-user')
    @include('_partials/_modals/modal-add-new-address')


@endsection --}}



@extends('layouts/layoutMaster')

@section('title', 'Leaflet - Maps')

@section('vendor-style')
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/leaflet/leaflet.css') }}" />
@endsection

@section('vendor-script')
    <script src="{{ asset('assets/vendor/libs/leaflet/leaflet.js') }}"></script>
@endsection

@section('page-script')
    <script>
        (g => {
            var h, a, k, p = "The Google Maps JavaScript API",
                c = "google",
                l = "importLibrary",
                q = "__ib__",
                m = document,
                b = window;
            b = b[c] || (b[c] = {});
            var d = b.maps || (b.maps = {}),
                r = new Set,
                e = new URLSearchParams,
                u = () => h || (h = new Promise(async (f, n) => {
                    await (a = m.createElement("script"));
                    e.set("libraries", [...r] + "");
                    for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
                    e.set("callback", c + ".maps." + q);
                    a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                    d[q] = f;
                    a.onerror = () => h = n(Error(p + " could not load."));
                    a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                    m.head.append(a)
                }));
            d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() =>
                d[l](f, ...n))
        })
        ({
            key: "{{ env('GOOGLE_MAPS_API_KEY') }}",
            v: "weekly"
        });
    </script>
    <script>
        // Initialize and add the map
        let map;
        let polyline;
        async function initMap() {
            // The location of Uluru
            const position = {
                lat: {{ $dataContent->lat }},
                lng: {{ $dataContent->long }}
            };
            // Request needed libraries.
            //@ts-ignore
            const {
                Map
            } = await google.maps.importLibrary("maps");
            // const {
            //     AdvancedMarkerElement
            // } = await google.maps.importLibrary("marker");

            // The map, centered at Uluru
            const dataContentPosition = {
                lat: {{ $dataContent->lat }},
                lng: {{ $dataContent->long }}
            };

            // Initialize the map centered at dataContentPosition
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: dataContentPosition,
                mapId: "DEMO_MAP_ID",
            });

            const dataContentMarker = new google.maps.Marker({
                position: dataContentPosition,
                map: map,
                title: "{{ $dataContent->name }}",
                icon: '{{ url('assets/img/ambulance-top-sm.png') }}'
            });
        }


        //     polyline.setMap(map);
        // }

        // function displayRoute(start, end) {
        //     const directionsService = new google.maps.DirectionsService();

        //     directionsService.route({
        //         origin: start,
        //         destination: end,
        //         travelMode: 'DRIVING', // Specify the travel mode, e.g., 'DRIVING', 'WALKING', 'BICYCLING'
        //         avoidTolls: true
        //     }, function(response, status) {
        //         if (status === 'OK') {
        //             // The directions service response is available in the 'response' object
        //             console.log(response);
        //             console.error('Directions request ok. Status:', status);

        //             // To display the route on the map, you can use the DirectionsRenderer
        //             const directionsRenderer = new google.maps.DirectionsRenderer();
        //             directionsRenderer.setMap(map); // Assuming 'map' is your Google Map instance
        //             directionsRenderer.setDirections(response);
        //         } else {
        //             console.error('Directions request failed. Status:', status);
        //         }
        //     })

        // }
        initMap();
    </script>
    {{-- <script src="{{ asset('assets/js/maps-leaflet.js') }}"></script> --}}
    {{-- <script>
        if ("geolocation" in navigator) { //check geolocation available 
            console.log('search location');
            if (!navigator.geolocation) {
                console.log('browser tidak suport')
            } else {
                console.log('browser suport')
                navigator.geolocation.getCurrentPosition(getPosition())
            }

            function getPosition(position) {

                console.log(position);
            }
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Found your location \nLat : " + position.coords.latitude + " \nLang :" + position
                    .coords.longitude);
            });
        } else {
            console.log("Browser doesn't support geolocation!");
        }

        const basicMapVar = document.getElementById('basicMap');
        if (basicMapVar) {
            const basicMap = L.map('basicMap').setView([{{ $dataContent->lat }}, {{ $dataContent->long }}], 10);
            L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
                maxZoom: 18
            }).addTo(basicMap);
        }
    </script> --}}
@endsection

@section('content')
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <h4 class="py-3 mb-4">
        <span class="text-muted fw-light">Emergency Call /</span>
        Detail
    </h4>
    <div class="col-12 col-lg-12">
        {{-- <div class="card mb-4">
            <div class="card-body">

            </div>
        </div> --}}
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title m-0">Maps</h5>
                    </div>
                    <div class="card-datatable table-responsive">
                        <div id="map" style="height:400px; width:100%; "></div>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title m-0">Log</h5>
                    </div>
                    <div class="card-body">
                        <ul class="timeline pb-0 mb-0">
                            <li class="timeline-item timeline-item-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Request Call (ID: #{{ $dataContent->id }})
                                        </h6>
                                        <span class="text-muted">{{ tanggalSort($dataContent->created_at) }},
                                            ({{ tanggalJam($dataContent->created_at) }})</span>
                                    </div>
                                    <p class="mt-2">{{ $dataContent->name }}</p>
                                </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Pick-up</h6>
                                        <span class="text-muted">{{ tanggalSort($dataContent->created_at) }},
                                            ({{ tanggalJam($dataContent->created_at) }})</span>

                                    </div>
                                    <p class="mt-2">by Admin PSC</p>
                                </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent border-transparent pb-0">
                                <span class="timeline-point timeline-point-success"></span>
                                <div class="timeline-event pb-0">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Selesai</h6>
                                    </div>
                                    {{-- <p class="mt-2 mb-0">Package will be delivered by tomorrow</p> --}}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h6 class="card-title mb-4"></h6>
                        <div class="d-flex justify-content-start align-items-center mb-4">
                            <div class="avatar me-2 pe-1">
                                <img src="{{ asset('assets/img/avatars/1.png') }}" alt="Avatar" class="rounded-circle">
                            </div>
                            <div class="d-flex flex-column">
                                <a href="{{ url('app/user/view/account') }}">
                                    <h6 class="mb-1">{{ $dataContent->name }}</h6>
                                </a>
                                <small>Nomor Polisi : {{ $dataContent->police_number }}</small>
                            </div>
                        </div>

                        <div class="justify-content-between">


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
@push('scripts')
    <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
@endpush
