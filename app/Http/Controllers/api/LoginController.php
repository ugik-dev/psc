<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\LoginSession;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'phone' => 'required'
        ]);

        $user = LoginSession::create($validated)->id;
        $user = LoginSession::find($user);

        return response()->json([
            'message' => 'Authentication success',
            'data' => [
                'token' => $user->createToken('api-token')->plainTextToken,
                'name' => $user->name,
                'phone' => $user->phone
            ]
        ]);
    }
}
