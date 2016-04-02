<?php
defined('BASEPATH') OR exit('No direct script access allowed');

final class Performers extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('performer', 'performers');
    }

    public function index()
    {
        return $this->json(['data' => $this->performers->findAll()]);
    }

    public function view($id)
    {
        $p = $this->performers->getByIdentifier($id);
        if (!$p) {
            return $this->json([
                'status' => 404,
                'error' => sprintf('Performer %d Not Found', $id),
            ], 404);
        }

        return $this->json(['data' => $p]);
    }

    private function json(array $data, $status=200)
    {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($data);
    }
}
