<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use League\Fractal\Manager;
use League\Fractal\Resource\ResourceInterface;

final class Fractal
{
    /**
     * @var Manager
     */
    private $fractal;

    public function __construct(Manager $fractal=null)
    {
        $this->fractal = $fractal ?: new Manager();
    }

    public function normalize(ResourceInterface $resource)
    {
        return $this->fractal->createData($resource)->toArray();
    }
}
