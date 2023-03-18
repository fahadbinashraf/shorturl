<?php

namespace App\Http\Controllers;

use App\Models\ShortUrl;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Tuupola\Base62;

class ShortUrlController extends Controller
{
    //
    public function list()
    {
        return ShortUrl::all();
    }

    public function encode(Request $request): JsonResponse
    {
        $request->validate([
            'url' => ['required']
        ]);
        $base62 = new Base62();
        $code = $base62->encode(md5($request->url));
        return response()->json([
            'status' => true,
            'code' => substr($code, 0, 4)
        ]);
    }
}
