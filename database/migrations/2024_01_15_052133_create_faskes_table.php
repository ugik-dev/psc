<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\RefJenFaskes;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('faskes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(RefJenFaskes::class);
            $table->string('name');
            $table->string('deskcription');
            $table->string('logo');
            $table->string('cover');
            $table->string('long');
            $table->string('lat');
            $table->json('operasional_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faskes');
    }
};
