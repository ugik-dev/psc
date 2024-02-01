<!DOCTYPE html>
<html>
    <?php
    $imageBinary = base64_encode($dataForm->gambar);
    $imageSrc = 'data:image/jpeg;base64,' . $imageBinary;
    
    ?>

    <head>
        <title>Judul</title>
        {{-- <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&ampdisplay=swap"
            rel="stylesheet"> --}}
    </head>
    <style>
        /* CSS untuk memberikan margin pada tabel */
        html {
            margin: 3px 10px 3px 5px;
            padding: 3px 3px 3px 3px
        }

        .no-border {
            border: none;
            padding-bottom: 2px;
            padding-right: 2px;
            border-collapse: collapse;
            /* border: 1px solid red; */
        }

        body {
            font-size: 13px;
            /* margin: 0px 0px 0px 0px !important; */
            /* Set your desired base font size */
        }

        table {
            margin: 2px;
            border-collapse: collapse;
            border: 2px solid #070707;
            /* Atur nilai margin sesuai kebutuhan Anda */
            /* border-collapse: collapse; */
            /* Agar garis antar sel tabel terlihat lebih baik */
            /* Lebar tabel, sesuaikan dengan kebutuhan Anda */
        }

        th,
        td {
            border-collapse: collapse;
            border: 2px solid #070707;
            /* Garis antar sel tabel */
            padding: 0px;
            /* Jarak antara isi sel dengan batas sel */
            text-align: left;
            /* Penataan teks dalam sel tabel */
        }

        th {
            background-color: #f2f2f2;
        }

        .text-center {
            text-align: center;
        }

        .form-check {
            display: flex;
            align-items: center;
        }

        .form-check-input {
            margin-right: 10px;
            /* Sesuaikan dengan jarak yang diinginkan antara checkbox dan label */
        }

        .break-5 {
            line-height: 5px;
        }

        .background-image,

        .front-image {
            width: 370px !important;
            height: 370px;
            background-repeat: no-repeat;
        }

        .background-image {
            background-image: url('{{ public_path('assets/img/anotomi-tubuh.png') }}');
            top: 0;
            left: 0;
            background-size: contain;
            background-position: center center;
        }

        .front-image {
            background-image: url('{{ $imageSrc }}');
            /* Ganti dengan path gambar depan */
            position: absolute;
            top: 0;
            left: 0;
            background-size: contain;
            background-position: center center;
            /* Sesuaikan posisi ini */
        }

        .page_break {
            page-break-before: always;
        }
    </style>

    <body>
        <table border="1px">
            <tr>
                <th colspan=2 class="text-center" style="font-size: 14">FORM PENGKAJIAN DAN TINDAKAN
                    <br>PUBLIC SAFETY CENTER (PSC) -119 SEPINTU SEDULANG KABUPATEN BANGKA


                </th>
            </tr>
            <tr>
                <td width="50%">
                    <img style="margin-left: 3px" src="{{ public_path('assets/img/kop-form-kajian.jpg') }}" />
                </td>
                <td>
                    <table class="no-border">
                        {!! table_input('Nama Pasien', $dataForm->nama_pasien ?? '', ['200', '10', '200']) !!}
                        {!! table_input('No Telp Pasien', $dataForm->phone_pasien ?? '') !!}
                        {!! table_input('Umur', ($dataForm->umur ?? '') . ' Tahun') !!}
                        {!! table_input(
                            'Jenis Kelamin',
                            !empty($dataForm->jenis_kelamin) ? ($dataForm->jenis_kelamin == 'p' ? 'Perempuan' : 'Laki-laki') : '',
                        ) !!}
                        {!! table_input(
                            'Sumber Informasi',
                            !empty($dataForm->sumber_informasi) ? ($dataForm->sumber_informasi == 'orang_lain' ? 'Orang Lain' : 'Diri') : '',
                        ) !!}
                        {!! table_input('Jamkes', $dataForm->jamkes ?? '') !!}
                        {!! table_input('Lokasi Kejadian', $dataForm->lokasi_kejadian ?? '') !!}
                        {!! table_input('Alamat Rumah', $dataForm->alamat_rumah ?? '') !!}
                        {!! table_input('Tanggal', $dataContent->created_at->format('d-m-Y')) !!}
                    </table>
                    <table border="1" class="text-center" width="100%">
                        <tr>
                            <td class="text-center">Panggilan</td>
                            <td class="text-center">Kebera<br>ngkatan</td>
                            <td class="text-center">TKP</td>
                            <td class="text-center">Yankes</td>
                            <td class="text-center">di Rujuk</td>
                        </tr>
                        <tr>
                            <td class="text-center">{{ $dataContent->created_at->format('h:i') }}</td>
                            <td class="text-center">{{ $dataForm->waktu_berangkat }}</td>
                            <td class="text-center">{{ $dataForm->waktu_tkp }}</td>
                            <td class="text-center">{{ $dataForm->waktu_yankes }}</td>
                            <td class="text-center"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <div style="min-height: 50px; margin-left: 10px"> <b>Keluhan Utama:</b><br>{!! $dataForm->keluhan_utama !!}
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan=2 class="text-center"><b>PRIMARY ASSESSMENT</b></td>
            </tr>
            <tr>
                <td class="text-center"><b>AIRWAY</b></td>
                <td class="text-center"><b>BREATHING</b></td>
            </tr>
            <tr>
                <td style="vertical-align: top ">
                    <table border="0" class="no-border" width='100%'>
                        <tr>
                            <td width="30%" class="no-border"
                                style="vertical-align: top ; padding-top: 10px !important">

                                <table class="no-border">
                                    {!! pdf_checkbox2('Bebas', $dataForm->airway_bebas ?? '') !!}
                                    {!! pdf_checkbox2('Tidak Efektif', $dataForm->airway_tiak_efektif ?? '') !!}
                                    {!! pdf_checkbox2('Benda Asing', $dataForm->airway_benda_asing ?? '') !!}
                                    {!! pdf_checkbox2('C-Spine', $dataForm->airway_c_spine ?? '') !!}

                                </table>


                            </td>
                            <td class="no-border" style="vertical-align: top ; padding-top: 10px !important">
                                <label>Tindakan : </label>
                                <table class="no-border">
                                    {!! pdf_checkbox2('Bebaskan Jalan Napas', $dataForm->airway_t_bebaskan_jalan_napas ?? '') !!}
                                    {!! pdf_checkbox2(
                                        'Keluarkan Benda Asing sadsa asdasd ' .
                                            ($dataForm->airway_t_kel_ben_val
                                                ? '<span style="text-decoration: underline;">   ' . $dataForm->airway_t_kel_ben_val . '    </span>'
                                                : ''),
                                        $dataForm->airway_t_kel_ben ?? '',
                                    ) !!}
                                    {!! pdf_checkbox2(
                                        'Fiksasi Manual <br>' . pdf_radio('', get_fiksasi(), $dataForm->airway_t_fik_man_val ?? ''),
                                        $dataForm->airway_t_fik_man ?? '',
                                    ) !!}
                                    {!! pdf_checkbox2('Colar brance', $dataForm->airway_t_col_brance ?? '') !!}
                                    {!! pdf_checkbox2('OPA', $dataForm->airway_t_opa ?? '') !!}
                                    {!! pdf_checkbox2('Intubasi / Needle krokotirodektomie', $dataForm->airway_t_intubasi ?? '') !!}
                                </table>
                                <br><span style="margin-buttom: 100px !important"></span>
                            </td>
                        </tr>
                    </table>
                </td>
                <td style="vertical-align: top ">
                    <table border="0" class="no-border" width='100%'>
                        <tr>
                            <td width="50%" class="no-border"
                                style="vertical-align: top ; padding-top: 10px !important">

                                <table class="no-border">
                                    {!! pdf_checkbox2('Andekuat', $dataForm->breathing_andekuat ?? '') !!}
                                    {!! pdf_checkbox2(pdf_radio('', get_breathing(), $dataForm->breathing_val ?? ''), 'noprint') !!}
                                    {!! pdf_checkbox2('Wheezing ', $dataForm->breathing_wheezing ?? '') !!}
                                    {!! pdf_checkbox2('Stridor ', $dataForm->breathing_stridor ?? '') !!}
                                    {!! pdf_checkbox2('Apnoe', $dataForm->breathing_apnoe ?? '') !!}
                                </table>

                            </td>
                            <td class="no-border" style="vertical-align: top ; padding-top: 10px !important">
                                <label>Tindakan : </label>
                                <table class="no-border">

                                    {!! pdf_checkbox2(
                                        'O2/Oksigen : ' . $dataForm->breathing_t_o2_val . '  <span >lt/mt</span>',
                                        $dataForm->breathing_t_o2 ?? '',
                                    ) !!}
                                    {!! pdf_checkbox2(
                                        'Saturasi : ' . $dataForm->breathing_t_satur_val . '  <span >%</span>',
                                        $dataForm->breathing_t_satur ?? '',
                                    ) !!}

                                    {!! pdf_checkbox2('BVM', $dataForm->breathing_t_bvm ?? '') !!}
                                    {!! pdf_checkbox2('Needle thoracosistesis', $dataForm->breathing_t_needle_thorac ?? '') !!}
                                    {!! pdf_checkbox2('Thorax Drain', $dataForm->breathing_t_thorax_drain ?? '') !!}
                                </table>

                                <br><span style="margin-buttom: 100px !important"></span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="text-center"><b>CIRCULATION</b></td>
                <td class="text-center"><b>DISABILITY (GCS) =
                        {{ $dataForm->gcs ?? '....................................' }}</b></td>
            </tr>
            <tr>
                <td style="vertical-align: top ">
                    <table border="0" class="no-border" width='100%'>
                        <tr>
                            <td width="50%" class="no-border"
                                style="vertical-align: top ; padding-top: 10px !important">

                                <table class="no-border" style="vertical-align: top ;">
                                    <tr class="no-border" style="vertical-align: top ;">
                                        <td class="no-border" style="vertical-align: top ;">1. </td>
                                        <td class="no-border"> Capillary refil : {{ $dataForm->cir_cap_refil }} dt </td>
                                    </tr>
                                    <tr class="no-border" style="vertical-align: top ;">
                                        <td class="no-border">2. </td>
                                        <td class="no-border"> Warna kulit<br>
                                            {!! pdf_radio('', get_warna_kulit(), $dataForm->cir_col_kulit ?? false) !!}
                                        </td>
                                    </tr>
                                    <tr class="no-border" style="vertical-align: top ;">
                                        <td class="no-border">3. </td>
                                        <td class="no-border"> Kulit<br>
                                            {!! pdf_radio('', get_kulit(), $dataForm->cir_kulit ?? false) !!}
                                        </td>
                                    </tr>
                                    <tr class="no-border" style="vertical-align: top ;">
                                        <td class="no-border">4. </td>
                                        <td class="no-border"> Nadi<br>
                                            Tempat : {{ $dataForm->cir_nadi_tempat ?? '' }} <br>
                                            {!! pdf_radio('', get_nadi(), $dataForm->cir_nadi ?? '') !!}
                                        </td>
                                    </tr>


                                </table>


                            </td>
                            <td class="no-border" style="vertical-align: top ; padding-top: 10px !important">
                                <label>Tindakan : </label>
                                <table class="no-border">
                                    <tr class="no-border">
                                        <td class="no-border">1.</td>
                                        <td class="no-border">Pasang Monitor : {{ $dataForm->cir_monitor ?? '' }} </td>
                                    </tr>
                                    <tr class="no-border">
                                        <td class="no-border"></td>
                                        <td class="no-border">
                                            <div style="min-height: 50">
                                                EKG : {{ $dataForm->cir_ekg ?? '' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="no-border">
                                        <td class="no-border">2.</td>
                                        <td class="no-border">IVFD : {{ $dataForm->cir_cpr ?? '...............' }} mt
                                        </td>
                                    </tr>
                                    <tr class="no-border">
                                        <td class="no-border">3.</td>
                                        <td class="no-border">CPR : {{ $dataForm->cir_ifvd ?? '...............' }}
                                            tts/ms
                                        </td>
                                    </tr>
                                    {!! pdf_checkbox2('Periksa Tensi', $dataForm->cir_tensi ?? '') !!}
                                    {!! pdf_checkbox2('Balut Tekan', $dataForm->cir_balut_tekan ?? '') !!}
                                    {!! pdf_checkbox2('Bebat Tekan', $dataForm->cir_bebat_tekan ?? '') !!}
                                    {!! pdf_checkbox2('Defibrator', $dataForm->cir_defibrator ?? '') !!}
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
                <td style="vertical-align: top ">
                    <table border="0" class="no-border" width='100%'>
                        <tr>
                            <td>
                                <table width='100%' border="1">
                                    <tr class="text-center">
                                        <td colspan="1" class="text-center"><b>MEMBUKA MATA</b></td>
                                        <td colspan="1" class="text-center">NILAI</td>
                                    </tr>
                                    <?php
                                    $gcs_mata = gcs_mata();
                                    $gcs_verbal = gcs_verbal();
                                    $gcs_motorik = gcs_motorik();
                                    ?>
                                    @foreach ($gcs_mata as $key => $m)
                                        <tr>
                                            <td>{{ $m }}</td>
                                            <td class="text-center">
                                                {{ $key == ($dataForm->gcs_res_mata ?? false) ? '[' . $key . ']' : $key }}
                                            </td>
                                        </tr>
                                    @endforeach
                                    <tr>
                                        <td colspan="2" class="text-center"><b>RESPON VERBAR</b></td>
                                    </tr>
                                    @foreach ($gcs_verbal as $key => $m)
                                        <tr>
                                            <td>{{ $m }}</td>
                                            <td class="text-center">
                                                {{ $key == ($dataForm->gcs_res_verbal ?? false) ? '[' . $key . ']' : $key }}
                                            </td>
                                        </tr>
                                    @endforeach
                                    <tr>
                                        <td colspan="2" class="text-center"><b>RESPON MOTORIK</b></td>
                                    </tr>
                                    @foreach ($gcs_motorik as $key => $m)
                                        <tr>
                                            <td>{{ $m }}</td>
                                            <td class="text-center">
                                                {{ $key == ($dataForm->gcs_res_motorik ?? false) ? '[' . $key . ']' : $key }}
                                            </td>
                                        </tr>
                                    @endforeach

                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tindakan <br>
                                Posisi : {{ $dataForm->gcs_t_posisi ?? '' }} <br>
                                GDS : {{ $dataForm->gcs_t_gds ?? '' }} mg/dl
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div class="page_break"></div>
        <table border="1px">
            <tr>
                <td class="text-center"><b>SKALA NYERI</b></td>
                <td class="text-center"><b>EXPOSURE</b></td>
            </tr>
            <tr>
                <td class="text-center">

                    @for ($i = 0; $i <= 10; $i++)
                        &nbsp;&nbsp;
                        {!! !empty($dataForm->skala_nyeri)
                            ? ($dataForm->skala_nyeri == $i
                                ? '<b style="font-size : 14">[' . $i . ']</b>'
                                : $i)
                            : $i !!}&nbsp;&nbsp;
                    @endfor

                </td>
                <td class="text-center">{!! pdf_radio('', gcs_expo(), $dataForm->expo ?? false) !!}</td>
            </tr>
            <tr>
                <td class="text-center" colspan="2"><b>VITAL SIGN& SECONDARY ASSESMENT
                    </b></td>
            </tr>
            <tr>
                <td class="text-center" colspan="2">
                    <table border="1" width="100%">
                        <tr>
                            <td width="25%">NIPN : {{ $dataForm->sec_nipb ?? '..........' }} mmHg</td>
                            <td width="25%">HR : {{ $dataForm->sec_hr ?? '..........' }} x/mt</td>
                            <td width="25%">RR : {{ $dataForm->sec_rr ?? '..........' }} x/mt</td>
                            <td width="25%">TEMP : {{ $dataForm->sec_temp ?? '..........' }} &deg;C</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="50%" style="position: relative; vertical-align: top">
                    <div class="background-image"></div>
                    <div class="front-image"></div>
                </td>
                <td width="50%" style="vertical-align: top ">
                    <table width="100%">
                        <tr>
                            <td>
                                <div style="min-height: 40"><b>Riwayat Alergi</b> : {!! $dataForm->sec_riw_alergi !!}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="min-height: 40"><b>Riwayat Makanan</b> : {!! $dataForm->sec_riw_makanan !!}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="min-height: 40"><b>Riwayat Penyakit Keluarga</b> : {!! $dataForm->sec_riw_penyakit_kel !!}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="min-height: 50"><b>Suspect Diagnosis</b> : {!! $dataForm->sec_suspect !!}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="min-height: 100"><b>Terapi/Obat yang diberikan</b> :
                                    {!! $dataForm->sec_riw_alergi !!}</div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td class="text-center">PETUGAS<br><br><br> <b> <b> ( {{ $dataForm->user->name }} )</b></td>
                <td class="text-center">PETUGAS YANG MENERIMA RUJUKAN
                    <br><br><br> <b> <b> ( ............................................... )</b>
                </td>
            </tr>
        </table>
    </body>

</html>
