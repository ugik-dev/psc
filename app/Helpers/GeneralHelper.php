<?php

if (!function_exists('tanggalSort')) {
    function tanggalSort($date)
    {
        // Set locale to Bahasa Indonesia
        \Carbon\Carbon::setLocale('id');
        // format keluaran Sel, 9 Jan 23
        return \Carbon\Carbon::parse($date)->isoFormat('ddd, D MMM YY');
    }
}

function styleStatusCall($text, $s)
{
    return '<span class="badge bg-label-' . $s . ' rounded-pill">' . $text . '</span>';
}


if (!function_exists('input_checkbox')) {
    // function input_checkbox($id, $label, $extra = '', $value = null)
    // {
    //     return '<div class="form-check form-check-primary">
    //             <input class="form-check-input" type="checkbox" value="1" id="' . $id . '"
    //                 name="' . $id . '" ' . (!empty($value) ? ($value == '1' ? 'checked' : '') : '') . '>
    //             <label class="form-check-label" for="' . $id . '">' . $label . $extra . '</label>
    //         </div>';
    // }

    function input_checkbox($id, $label, $extra = '', $value = null)
    {
        $checked = old($id, $value) ? 'checked' : '';

        return view('components.checkbox', compact('id', 'label', 'extra', 'checked'));
    }
}

if (!function_exists('input_inline')) {
    // function input_inline($id, $label, $col_1 = 'sm-3', $col_2 = 'sm-9', $span = null, $value = null)
    // {
    //     return '<div class="row mt-2">
    //                 <label class="col-' . $col_1 . ' col-form-label" for="' . $id . '">' . $label . '</label>
    //                 <div class="col-' . $col_2 . '">
    //                     <div class="input-group">
    //                         <input id="' . $id . '"" name="' . $id . '"" class="form-control">
    //                         ' . (!empty($span) ? '<span class="input-group-text">' . $span . '</span>' : null) . '
    //                     </div>
    //                 </div>
    //             </div>';
    // }

    function input_inline($id, $label, $col_1 = 'sm-3', $col_2 = 'sm-9', $span = null, $value = null)
    {
        return view('components.input-inline', compact('id', 'label', 'col_1', 'col_2', 'span', 'value'));
    }
}
if (!function_exists('textarea_inline')) {
    function textarea_inline($id, $label, $col_1 = 'sm-3', $col_2 = 'sm-9', $rows = 3, $value = null)
    {
        return '<div class="row mt-3">
                            <label class="col-' . $col_1 . ' col-form-label" for="">' . $label . '</label>
                            <div class="col-' . $col_2 . '">
                                    <div class="input-group">
                                        <textarea type="text" id="' . $id . '" name="' . $id . '" rows="' . $rows . '" class="form-control">' . ($value ?? '') . '</textarea>
                                    </div>
                            </div>
                        </div>
                  ';
    }
}
if (!function_exists('input_radios')) {
    function input_radios($id,  $arr, $class = '', $col_child = 'sm-12', $value = null)
    {
        $html = '';
        foreach ($arr as $key => $ar) {
            $html .= input_radio($id, $key, $ar, $col_child, $value);
        };

        return ' <div class="col-sm-12 mt-2 ' . $class . '">
                   ' . $html . '
                </div>';
    }
}

function input_radio($id, $key, $ar, $col_child, $value)
{
    // echo 'key: ' . $key . '  value:' . $value;
    // die();
    return '
        <div class="form-check form-check-inline col-' . $col_child . '">
            <input class="form-check-input form-check-inline" type="radio" ' . (!empty($value) ? ($value == $key ? 'checked' : '') : '') . '
            name="' . $id . '" id="' . $id . '_' . $key . '_val" value="' . $key . '">
        <label class="form-check-label"  for="' . $id . '_' . $key .  '_val">' . $ar . '</label>
        </div>
   ';
}









if (!function_exists('statusCall')) {
    function statusCall($i)
    {
        if ($i == 1) return styleStatusCall("Belum Direspon", 'danger');
        else if ($i == 2) return styleStatusCall("Handle by Admin PSC", 'warning');
        else if ($i == 3) return styleStatusCall("Handle by Petugas Lapangan", 'warning');
        else if ($i == 99) return styleStatusCall("Selesai", 'success');
    }
}

if (!function_exists('tanggalFull')) {
    function tanggalFull($date)
    {
        // Set locale to Bahasa Indonesia
        \Carbon\Carbon::setLocale('id');

        return \Carbon\Carbon::parse($date)->isoFormat('dddd, D MMMM YYYY, ' . '[Pukul] HH:mm');
    }
}
if (!function_exists('tanggalDayDate')) {
    function tanggalDayDate($date)
    {
        // Set locale to Bahasa Indonesia
        \Carbon\Carbon::setLocale('id');

        return \Carbon\Carbon::parse($date)->isoFormat('dddd, D MMMM YYYY');
    }
}

if (!function_exists('tanggalJam')) {
    function tanggalJam($date)
    {
        // Set locale to Bahasa Indonesia
        \Carbon\Carbon::setLocale('id');

        return \Carbon\Carbon::parse($date)->isoFormat('HH:mm');
    }
}
