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
