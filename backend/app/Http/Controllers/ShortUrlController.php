<?php

namespace App\Http\Controllers;

use App\Models\ShortUrl;
use App\Rules\RebuyURL;
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

    public function create(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'url' => ['required', new RebuyURL]
            ]);

            $url = $request->url;
            $base62 = new Base62();
            $code = $base62->encode(md5($url));
            $code = substr($code, 0, 4);

            $shortUrl = ShortUrl::firstOrCreate([
                'long' => $url,
                'short' => env('APP_URL') . '/' . $code
            ]);

            return response()->json([
                'status' => true,
                'data' => $shortUrl
            ]);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ]);
        }
    }

    public function process(Request $request, $code)
    {
        $short = env('APP_URL') . '/' . $code;
        $shortUrl = ShortUrl::where('short', $short)->first();
        if (!empty($shortUrl)) {
            return redirect()->away($shortUrl->long);
        } else {
            return abort(404);
        }
    }
}