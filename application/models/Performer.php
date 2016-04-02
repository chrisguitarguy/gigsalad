<?php
defined('BASEPATH') OR exit('No direct script access allowed');

final class Performer extends CI_Model
{
    public function findAll()
    {
        $q = $this->db->get('performers');
        return $q->result();
    }

    public function getByIdentifier($id)
    {
        $q = $this->db->get_where('performers', ['ID' => $id], 1);
        return $q->num_rows() > 0 ? $q->row() : null;
    }
}
