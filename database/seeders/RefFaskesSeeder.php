<?php

namespace Database\Seeders;

use App\Models\RefJenFaskes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RefFaskesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        RefJenFaskes::updateOrCreate(['name' => 'PSC 119', 'name_sort' => 'PSC']);
        RefJenFaskes::updateOrCreate(['name' => 'Rumah Sakit', 'name_sort' => 'RS']);
        RefJenFaskes::updateOrCreate(['name' => 'Puskesmas', 'name_sort' => 'PKM']);
        RefJenFaskes::updateOrCreate(['name' => 'Bidan', 'name_sort' => 'Bidan']);
        RefJenFaskes::updateOrCreate(['name' => 'Klinik', 'name_sort' => 'Klinik']);
        RefJenFaskes::updateOrCreate(['name' => 'Apotek', 'name_sort' => 'Apotek']);
    }
}
