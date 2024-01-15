<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestCall extends Model
{
    use HasFactory;
    protected $fillable = ['ref_emergency_id', 'long', 'lat', 'login_session_id'];
}
