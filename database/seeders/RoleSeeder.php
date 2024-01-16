<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $super_admin = Role::updateOrCreate(['id' => 1, 'name' => 'super', 'title' => 'Super Admin']);
        $kepala = Role::updateOrCreate(['id' => 2, 'name' => 'kepala', 'title' => 'Kepala UPT']);
        $kasubag = Role::updateOrCreate(['id' => 3, 'name' => 'kasubag', 'title' => 'Kasubag']);
        $admin = Role::updateOrCreate(['id' => 4, 'name' => 'admin', 'title' => 'Admin']);
        $admin = Role::updateOrCreate(['id' => 5, 'name' => 'pegawai', 'title' => 'Pegawai']);

        $respon_call = Permission::updateOrCreate(['name' => 'respon_call']);
        $super_admin->givePermissionTo($respon_call);
    }
}
