<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RefEmergency;

class RefEmergencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RefEmergency::updateOrCreate(['id' => 1, 'name' => 'PSC 119']);
        RefEmergency::updateOrCreate(['id' => 2, 'name' => 'Ambulan']);
        RefEmergency::updateOrCreate(['id' => 3, 'name' => 'Polisi']);
        RefEmergency::updateOrCreate(['id' => 4, 'name' => 'Damkar']);
        RefEmergency::updateOrCreate(['id' => 5, 'name' => 'Bidan']);
        RefEmergency::updateOrCreate(['id' => 6, 'name' => 'Tagana']);
    }
}
