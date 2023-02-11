<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sections extends Model
{
    use HasFactory;

    protected $table 		= "sections";

	protected $primaryKey 	= 'id';

	protected $keyType 		= 'int';

	public $incrementing 	= true;

	public $timestamps 		= false;

    protected $fillable = [

        'id', 

        'sName',

    ];
}
