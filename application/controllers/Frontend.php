<?php
defined('BASEPATH') OR exit('No direct script access allowed');

final class Frontend extends CI_Controller
{
    public function index()
    {
        $this->load->view('ui', [
            'isDebug' => ENVIRONMENT !== 'production',
        ]);
    }
}
