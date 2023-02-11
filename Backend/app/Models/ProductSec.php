<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSec extends Model
{
    use HasFactory;

    protected $table 		= "productsec";

	protected $primaryKey 	= 'id';

	protected $keyType 		= 'int';

	public $incrementing 	= true;

	public $timestamps 		= false;

    protected $fillable = [

        'id', 

        'product_id',

        'section_id',

    ];
}
