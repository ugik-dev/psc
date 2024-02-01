<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\RequestCall;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf as PDF;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class PdfController extends Controller
{
    public function form_kejadian($id, $id_form,)
    {
        $data = RequestCall::with(['login_session', 'ref_emergency'])
            ->findOrFail($id);
        $data_all = Form::find($id_form);
        // $jsonData = json_decode($data_all->form_data);
        $compact = [
            'dataContent' => $data,
            'dataForm' => $data_all,
        ];

        // $data = [
        //     'title' => 'Sample PDF Document',
        //     'content' => 'Hello, this is a sample PDF document created with Dompdf in Laravel.',
        // ];

        // return view('page.emergency.print', $compact);
        Pdf::setOption([
            'dpi' => 150, 'defaultFont' => 'sans-serif',  'margin_top' => 2,    // Set top margin in millimeters
            'margin_right' => 2,  // Set right margin in millimeters
            'margin_bottom' => 2, // Set bottom margin in millimeters
            'margin_left' => 2,
        ]);
        $pdf = PDF::loadView('page.emergency.print', $compact, [
            'dpi' => 150,
            'defaultFont' => 'sans-serif',
            'margin_top' => 2,
            'margin_right' => 2,
            'margin_bottom' => 2,
            'margin_left' => 2,
        ]);
        $pdf->setPaper('A4', 'portrait');
        // $pdf->setOptions([
        //     // Set left margin in millimeters
        // ]);
        // return $pdf->download('document.pdf');
        return $pdf->stream('document.pdf');
        return Response::make($pdf->output(), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename=document.pdf',
        ]);
    }
}
