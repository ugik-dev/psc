<?php

namespace App\Http\Controllers\api;

use App\Models\RequestCall;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class RequestController extends Controller
{
    //
    public function index()
    {
        return RequestCall::all();
    }

    public function post(Request $request)
    {
        $validate  = $request->validate([
            'ref_emergency_id' => 'required',
            'long' => 'required',
            'lat' => 'required',
        ]);
        // $user_id = Auth::id();
        $validate['login_session_id'] = $request->user()->id;
        // dd($request->user()->id);

        $res = RequestCall::create($validate);
        return response()->json([
            'message' => 'Request Emergency success',
            'data' => [
                'res' => $res
            ]
        ]);
    }
}
