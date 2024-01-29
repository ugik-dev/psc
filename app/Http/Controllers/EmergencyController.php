<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\LoginSession;
use App\Models\RequestCall;
use App\Models\RequestCallLog;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class EmergencyController extends Controller
{
    public function pengguna(Request $request)
    {
        if ($request->ajax()) {
            $data =  LoginSession::latest()->get();
            return DataTables::of($data)->addColumn('id', function ($data) {
                return $data->id;
            })->addColumn('created_at', function ($data) {
                return $data->created_at;
            })->addColumn('name', function ($data) {
                return $data->name;
            })->addColumn('phone', function ($data) {
                return $data->phone;
            })->addColumn('aksi', function ($data) {
                return "AKSI";
            })->make(true);
        }
        return view('page.pengguna', compact('request'));
    }
    public function getData(Request $request)
    {
        $data =  RequestCall::selectRaw('request_calls.*, login_session.name, login_session.phone, ref_emergencies.name as emergency_name')
            ->join('login_session', 'login_session.id', '=', 'request_calls.login_session_id')
            ->join('ref_emergencies', 'ref_emergencies.id', '=', 'request_calls.ref_emergency_id')
            ->where('request_calls.id', '=', $request->id_request)
            ->get()->first();

        return $this->responseSuccess(['success', 'data' => $data]);
    }

    public function detail($id, Request $request)
    {
        $data = RequestCall::with(['login_session', 'ref_emergency', 'logs.user', 'forms', 'forms.user'])
            ->findOrFail($id);
        // dd($data);
        return view('page.emergency.detail', ['dataContent' => $data]);
    }

    public function form($id, Request $request)
    {
        $data = RequestCall::with(['login_session', 'ref_emergency', 'logs.user', 'forms'])
            ->findOrFail($id);
        $form_url = route('emergency-form-save', ['id' => $data->id, 'id_form' => null]);
        return view('page.emergency.form', ['dataContent' => $data, 'form_url' => $form_url]);
    }

    public function form_edit($id, $id_form, Request $request)
    {
        $data = RequestCall::with(['login_session', 'ref_emergency'])
            ->findOrFail($id);
        $data_all = Form::find($id_form);
        $jsonData = json_decode($data_all->form_data);
        $form_url = route('emergency-form-save-edit', ['id' => $data->id, 'id_form' => $data_all->id]);
        $compact = ['dataContent' => $data, 'form_url' => $form_url, 'dataForm' => $data_all, 'jsonData' => $jsonData];
        return view('page.emergency.form', $compact);
    }
    public function form_save_new($id,  Request $request)
    {
        try {
            return $this->form_save($id, null, $request);
        } catch (Exception $ex) {
            return  $this->ResponseError($ex->getMessage());
        }
    }
    public function form_save($id, $id_form = null,  Request $request)
    {
        try {
            $data = RequestCall::with(['login_session', 'ref_emergency', 'logs.user'])
                ->findOrFail($id);

            $formData = $request->except(['_token', 'gambar']);
            $jsonData = json_encode($formData);

            $valid_data = [
                'request_call_id' => $data->id,
                'user_id' => Auth::user()->id,
                'form_data' => $jsonData
            ];
            if ($request->hasFile('gambar')) {
                $gambar = $request->file('gambar');
                $blobData = file_get_contents($gambar->getRealPath());
                $valid_data['gambar'] = $blobData;
            }
            if (!empty($id_form)) {
                $old_data = Form::find($id_form);
                $old_data->update($valid_data);
            } else {
                Form::create($valid_data);
            }
            return $this->responseSuccess($id);
        } catch (Exception $ex) {
            return  $this->ResponseError($ex->getMessage());
        }
    }


    public function action($id, $act = null, Request $request)
    {
        $data = RequestCall::with(['login_session', 'ref_emergency'])
            ->findOrFail($id);
        if (!empty($act)) {
            if ($act == 'pick-off') {
                RequestCallLog::create([
                    'request_call_id' => $data->id,
                    'user_id' => Auth::user()->id,
                    'action' => 'pick-off'
                ]);
            }
        }
        $data = RequestCall::with(['login_session', 'ref_emergency', 'logs.user'])
            ->findOrFail($id);
        return view('page.emergency.detail', ['dataContent' => $data]);
    }

    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data =  RequestCall::selectRaw('request_calls.*, login_session.name, login_session.phone, ref_emergencies.name as emergency_name')
                ->join('login_session', 'login_session.id', '=', 'request_calls.login_session_id')
                ->join('ref_emergencies', 'ref_emergencies.id', '=', 'request_calls.ref_emergency_id')
                ->latest()->get();

            return DataTables::of($data)->addColumn('id', function ($data) {
                return $data->id;
            })->addColumn('created_at', function ($data) {
                return $data->created_at;
            })->addColumn('name', function ($data) {
                return $data->name;
            })->addColumn('phone', function ($data) {
                return $data->phone;
            })->addColumn('emergency_name', function ($data) {
                return $data->emergency_name;
            })->addColumn('status', function ($data) {
                return $data->status;
            })->addColumn('posisi', function ($data) {
                return $data->long . ', ' . $data->lat;
            })->addColumn('aksi', function ($data) {
                return '<a href="' . route('detail-emergency', $data->id) . '" class="btn btn-primary">Open</a>';
            })->rawColumns(['aksi'])->make(true);
        }
        return view('page.emergency.index', compact('request'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
