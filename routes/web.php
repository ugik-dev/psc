<?php

use App\Events\RequestCallEvent;
use App\Http\Controllers\api\RequestController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\pages\HomePage;
use App\Http\Controllers\pages\Page2;
use App\Http\Controllers\pages\MiscError;
use App\Http\Controllers\authentications\LoginBasic;
use App\Http\Controllers\authentications\RegisterBasic;
use App\Http\Controllers\EmergencyController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FaskesController;
use GuzzleHttp\Psr7\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/', [LoginBasic::class, 'index'])->name('login');
Route::get('/page-2', [Page2::class, 'index'])->name('pages-page-2');

// pages
Route::get('/pages/misc-error', [MiscError::class, 'index'])->name('pages-misc-error');

// authentication
Route::get('/login', [LoginBasic::class, 'index'])->name('login');
Route::get('/logout', [LoginBasic::class, 'logout'])->name('logout');
Route::post('/auth/login-process', [LoginBasic::class, 'login'])->name('auth-login-process');
Route::get('/auth/login-basic', [LoginBasic::class, 'index'])->name('auth-login-basic');
Route::get('/auth/register-basic', [RegisterBasic::class, 'index'])->name('auth-register-basic');

Route::get('get-emergency', [EmergencyController::class, 'getData'])->name('get-emergency');
Route::get('emergency/{id}', [EmergencyController::class, 'detail'])->name('detail-emergency');


Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('emergency', [EmergencyController::class, 'index'])->name('emergency');
    Route::get('pengguna', [EmergencyController::class, 'pengguna'])->name('pengguna');
    Route::prefix('manage-faskes')->name('faskes.')->group(function () {
        Route::get('', [FaskesController::class, 'index'])->name('index');
        Route::get('get', [FaskesController::class, 'get'])->name('get');
        Route::post('', [FaskesController::class, 'create'])->name('create');
        Route::put('', [FaskesController::class, 'update'])->name('update');
        Route::delete('/', [FaskesController::class, 'delete'])->name('delete');
        Route::get('/getData/{id_wil}', [FaskesController::class, 'getData'])->name('get-data');
    });
});
