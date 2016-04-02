<?php

namespace Chrisguitarguy\Gigsalad;

defined('BASEPATH') OR exit('No direct script access allowed');

use League\Fractal\TransformerAbstract;

final class PerformerTransformer extends TransformerAbstract
{
    public function transform($performer)
    {
        return [
            'id' => (int) $performer->ID,
            'category' => $performer->category_name,
            'name' => $performer->act_name,
            'thumbnail' => $performer->thumbnail,
            'city' => $performer->city_name,
            'state' => $performer->state_code,
            'statename' => $performer->state_name,
            'country' => $performer->country_code,
            'slug' => $performer->url,
        ];
    }
}
