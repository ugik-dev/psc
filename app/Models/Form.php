<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;

    protected $fillable = ['request_call_id', 'user_id', 'form_data', 'gambar'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
