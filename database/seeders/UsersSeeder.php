<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::updateOrCreate([
            'username' => 'ugikdev',
            'name' => 'Ugik Dev',
            'email' => 'ugik.dev@gmail.com',
            'password' => Hash::make('123'),
            'role_id' => 1
        ]);
    }
}
