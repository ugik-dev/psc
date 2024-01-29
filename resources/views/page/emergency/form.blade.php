@extends('layouts/layoutMaster')

@section('title', 'Form Kejadian')

@section('vendor-style')
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/nouislider/nouislider.css') }}" />
@endsection

@section('vendor-script')
    <script src="{{ asset('assets/vendor/libs/nouislider/nouislider.js') }}"></script>

@endsection

@section('page-script')
    <script src="{{ asset('assets/js/form-layouts.js') }}"></script>

@endsection

@section('content')


    <h4 class="py-3 mb-4">
        <span class="text-muted fw-light">Emergency Call /</span>
        Form Kejadian

        <a class="btn btn-primary float-end ms-2" href="{{ route('detail-emergency', $dataContent->id) }}"> <i
                class="mdi mdi-keyboard-backspace me-2"></i>
            Kembali</a>
        <button class="btn btn-primary float-end" id="saveBtn"> <i class="mdi mdi-content-save-outline me-2"></i>
            Save</button>
    </h4>

    <div class="row mt-4">
        <div class="col-lg-3 col-md-4 col-12 mb-md-0 mb-3">
            <div class="d-flex justify-content-between flex-column mb-2 mb-md-0">
                @include('page.emergency.form_partials.menu')
                <div class="d-none d-md-block">
                    <div class="mt-5 text-center">
                        <img src="{{ asset('assets/img/medis-form.png') }}" class="img-fluid w-px-120" alt="FAQ Image">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-9 col-md-8 col-12">
            <form class="needs-validation add-new-record pt-0 row g-3" id="form-tindakan" novalidate>
                @csrf
                <div class="tab-content p-0">
                    @include('page.emergency.form_partials.tap_1_informasi')
                    @include('page.emergency.form_partials.tap_2_waktu')
                    @include('page.emergency.form_partials.tap_3_keluhan')
                    @include('page.emergency.form_partials.tap_4_primary')
                    @include('page.emergency.form_partials.tap_5_secondary')
                </div>
            </form>
        </div>
    </div>
    <script>
        $(document).ready(function() {
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var drawing = false;

            function_drawing()

            var saveBtn = $('#saveBtn');
            var TindakanForm = {
                'form': $('#form-tindakan'),
                'nama_pasien': $('#form-tindakan').find('#nama_pasien'),
                'phone_pasien': $('#form-tindakan').find('#phone_pasien'),
                'umur': $('#form-tindakan').find('#umur'),
                'jamkes': $('#form-tindakan').find('#jamkes'),
                'lokasi_kejadian': $('#form-tindakan').find('#lokasi_kejadian'),
                'alamat_rumah': $('#form-tindakan').find('#alamat_rumah'),


                'waktu_berangkat': $('#form-tindakan').find('#waktu_berangkat'),
                'waktu_tkp': $('#form-tindakan').find('#waktu_tkp'),
                'waktu_yankes': $('#form-tindakan').find('#waktu_yankes'),
                'waktu_rujukan': $('#form-tindakan').find('#waktu_rujukan'),

                'keluhan_utama': $('#form-tindakan').find('#keluhan_utama'),

                // tap-4
                // cekbox
                'airway_bebas': $('#form-tindakan').find('#airway_bebas'),
                'airway_tiak_efektif': $('#form-tindakan').find('#airway_tiak_efektif'),
                'airway_benda_asing': $('#form-tindakan').find('#airway_benda_asing'),
                'airway_c_spine': $('#form-tindakan').find('#airway_c_spine'),

                'airway_t_bebaskan_jalan_napas': $('#form-tindakan').find(
                    '#airway_t_bebaskan_jalan_napas'), //cb
                'airway_t_kel_ben': $('#form-tindakan').find('#airway_t_kel_ben'), //cb
                'airway_t_kel_ben_val': $('#form-tindakan').find('#airway_t_kel_ben_val'), //input text
                'airway_t_fik_man': $('#form-tindakan').find('#airway_t_fik_man'), //cb
                'airway_t_fik_man_val': $('#form-tindakan').find('#airway_t_fik_man_val'), //radio
                'airway_t_col_brance': $('#form-tindakan').find('#airway_t_col_brance'), //cb
                'airway_t_opa': $('#form-tindakan').find('#airway_t_opa'), //cb
                'airway_t_intubasi': $('#form-tindakan').find('#airway_t_intubasi'), //cb


                'breathing_andekuat': $('#form-tindakan').find('#breathing_andekuat'), //cb
                'breathing_val': $('#form-tindakan').find('#breathing_val'), //radio
                'breathing_wheezing': $('#form-tindakan').find('#breathing_wheezing'), //cb
                'breathing_stridor': $('#form-tindakan').find('#breathing_stridor'), //cb
                'breathing_apnoe': $('#form-tindakan').find('#breathing_apnoe'), //cb

                'breathing_t_o2': $('#form-tindakan').find('#breathing_t_o2'), //cb
                'breathing_t_o2_val': $('#form-tindakan').find('#breathing_t_o2_val'), //text
                'breathing_t_satur': $('#form-tindakan').find('#breathing_t_satur'), //cb
                'breathing_t_satur_val': $('#form-tindakan').find('#breathing_t_satur_val'), //text
                'breathing_t_bvm': $('#form-tindakan').find('#breathing_t_bvm'), //cb
                'breathing_t_needle_thorac': $('#form-tindakan').find('#breathing_t_needle_thorac'), //cb
                'breathing_t_thorax_drain': $('#form-tindakan').find('#breathing_t_thorax_drain'), //cb


                'cir_cap_refil': $('#form-tindakan').find('#cir_cap_refil'), //text
                'cir_col_kulit': $('#form-tindakan').find('#cir_col_kulit'), //radio
                'cir_kulit': $('#form-tindakan').find('#cir_kulit'), //radio
                'cir_nadi_tempat': $('#form-tindakan').find('#cir_nadi_tempat'), //text
                'cir_nadi': $('#form-tindakan').find('#cir_nadi'), //radio
                'cir_monitor': $('#form-tindakan').find('#cir_monitor'), //text
                'cir_ekg': $('#form-tindakan').find('#cir_ekg'), //textarea
                'cir_cpr': $('#form-tindakan').find('#cir_cpr'), //text
                'cir_ifvd': $('#form-tindakan').find('#cir_ifvd'), //text
                'cir_tensi': $('#form-tindakan').find('#cir_tensi'), //cb
                'cir_balut_tekan': $('#form-tindakan').find('#cir_balut_tekan'), //cb
                'cir_bebat_tekan': $('#form-tindakan').find('#cir_bebat_tekan'), //cb
                'cir_defibrator': $('#form-tindakan').find('#cir_defibrator'), //cb
                'gambarInput': $('#form-tindakan').find('#gambarInput'),

                // radio 
                // jenis_kelamin
                // sumber_informasi
            }

            var tindakanForm = document.getElementById('form-tindakan');


            function validasi_form(event) {
                if (!tindakanForm.checkValidity()) {
                    console.log(' not acc')
                    validation_form = false;
                    event.preventDefault();
                    event.stopPropagation();
                    tindakanForm.classList.add('was-validated');
                    return false;
                } else {
                    tindakanForm.classList.add('was-validated');
                    return true;
                }
            }

            saveBtn.on('click', function() {
                TindakanForm.form.submit();
            })

            TindakanForm.form.on('submit', function(event) {
                event.preventDefault();
                if (!validasi_form(event)) {
                    return
                };
                // if (TindakanForm.insertBtn.is(":visible")) {
                //     url = '{{ route('agent.create') }}';
                //     metode = 'POST';
                // } else {
                //     url = '{{ route('agent.update') }}';
                //     metode = 'PUT';
                // }
                // data: TindakanForm.form.serialize(),
                url = '{{ $form_url }}';
                var imageData = canvas.toDataURL("image/png");

                var fileInput = $("<input>").attr({
                    type: "file",
                    name: "gambar",
                    value: dataURLtoBlob(imageData),
                    style: "display: none"
                });
                var formData = new FormData($("#form-tindakan")[0]);
                var imageData = canvas.toDataURL("image/png");
                formData.delete('gambar');
                formData.append("gambar", dataURLtoBlob(imageData), "gambar.png");

                //     return formData;
                // }
                // Menggantikan elemen input file yang ada dengan yang baru
                // TindakanForm.form.find('#gambarInput').replaceWith(fileInput);


                Swal.fire(SwalOpt()).then((result) => {
                    if (!result.isConfirmed) {
                        return;
                    }
                    swalLoading();
                    $.ajax({
                        url: url,
                        'type': 'POST',
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function(data) {
                            if (data['error']) {
                                swalError(data['message'], "Simpan Gagal !!");
                                return;
                            }
                            window.location.href =
                                '{{ route('detail-emergency', $dataContent->id) }}';
                        },
                        error: function(e) {}
                    });
                });
            });

            function dataURLtoBlob(dataURL) {
                var arr = dataURL.split(',');
                var mime = arr[0].match(/:(.*?);/)[1];
                var bstr = atob(arr[1]);
                var n = bstr.length;
                var u8arr = new Uint8Array(n);

                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }

                return new Blob([u8arr], {
                    type: mime
                });
            }

            function function_drawing() {
                var penConfig = {
                    thickness: 5,
                    color: '#000000',
                    eraserMode: false
                };

                // Fungsi untuk memulai penggambaran
                function startDrawing(e) {
                    e.preventDefault();
                    drawing = true;
                    draw(e);
                }

                // Fungsi untuk mengakhiri penggambaran
                function stopDrawing() {
                    drawing = false;
                    ctx.beginPath();
                }

                @if (!empty($dataForm->gambar))
                    var gambarDataUrl = 'data:image/png;base64,{{ base64_encode($dataForm->gambar) }}';
                    var defaultImage = new Image();
                    defaultImage.src = gambarDataUrl;
                    defaultImage.onload = function() {
                        ctx.drawImage(defaultImage, 0, 0);
                    };
                @endif

                // Fungsi untuk menggambar di atas canvas
                function draw(e) {
                    if (!drawing) return;

                    if (e.touches && e.touches.length > 0) {
                        // Tangani input sentuh (touch input)
                        x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
                        y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
                    } else {
                        // Tangani input mouse
                        x = e.clientX - canvas.getBoundingClientRect().left;
                        y = e.clientY - canvas.getBoundingClientRect().top;
                    }

                    if (penConfig.eraserMode) {
                        var eraserSize = penConfig.thickness * 3;
                        ctx.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
                    } else {
                        ctx.strokeStyle = penConfig.color;
                        ctx.lineWidth = penConfig.thickness;
                        ctx.lineJoin = 'round';
                        ctx.lineCap = 'round';

                        ctx.lineTo(x, y);
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(x, y);
                    }
                }

                // Fungsi untuk menghapus garis terakhir
                function clearLine() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }

                // Fungsi untuk menghapus seluruh gambar
                function clearCanvas() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }

                // Fungsi untuk mengupdate konfigurasi pena
                function updatePenConfig() {
                    penConfig.thickness = document.getElementById('ketebalanPena').value;
                    penConfig.color = document.getElementById('warnaPena').value;
                    penConfig.eraserMode = document.getElementById('modePenghapus').checked;
                }

                // Event listener untuk inputan ketebalan pena
                document.getElementById('ketebalanPena').addEventListener('input', updatePenConfig);

                // Event listener untuk inputan warna pena
                document.getElementById('warnaPena').addEventListener('input', updatePenConfig);

                // Event listener untuk checkbox mode penghapus
                document.getElementById('modePenghapus').addEventListener('change', updatePenConfig);

                // Event listener untuk tombol Hapus Seluruh Gambar
                document.getElementById('hapusGambar').addEventListener('click', clearCanvas);

                canvas.addEventListener('mousedown', startDrawing);
                canvas.addEventListener('mouseup', stopDrawing);
                canvas.addEventListener('mousemove', draw);

                canvas.addEventListener('touchstart', startDrawing);
                canvas.addEventListener('touchend', stopDrawing);
                canvas.addEventListener('touchmove', draw);
            }
        });
    </script>

@endsection
