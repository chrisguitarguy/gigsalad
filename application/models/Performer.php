<?php
defined('BASEPATH') OR exit('No direct script access allowed');

final class Performer extends CI_Model
{
    public function findAll()
    {
        $q = $this->db->get('performers');
        return array_map([$this, 'normalizeRow'], $q->result());
    }

    public function getByIdentifier($id)
    {
        $q = $this->db->get_where('performers', ['ID' => $id], 1);
        return $q->num_rows() > 0 ? $this->normalizeRow($q->row()) : null;
    }

    private function normalizeRow($row)
    {
        if (!empty($row->thumbnail)) {
            $row->thumbnail = json_decode($row->thumbnail);
        }

        return $row;
    }
}
