'use client';

import { useMemo, useState } from 'react';
import {
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  MRT_TableContainer,
} from 'material-react-table';
import {
    Box,  
    Button,  
    CircularProgress,
    IconButton,  
    Tooltip,  
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { data as initData, type Person } from './makeData';

const TableEditQuestions = () => {
    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        //column definitions...
        () => [
            {
                accessorKey: 'number',
                header: 'Number',
                size: 40,
            },
            {
                accessorKey: 'soal',
                header: 'Soal',
                size: 300,
            },
            {
                accessorKey: 'kategori',
                header: 'Kategori',
                size: 120,
            },
            {
                accessorKey: 'jawaban',
                header: 'Jawaban',
                size: 120,
            },
            {
                accessorKey: 'jumlahPeserta',
                header: '%Benar',
                size: 120,
            },
        ],
        [],
        //end
    );

    const [data, setData] = useState(() => initData);

    const openDeleteConfirmModal = (row: MRT_Row<Person>) => {
        if (window.confirm('Are you sure you want to delete this user?')) {    
          console.log(row);   
        }    
    };

    const table = useMaterialReactTable({
        autoResetPageIndex: false,
        columns,
        data,
        enableRowOrdering: true,
        enableSorting: false,
        enableRowActions: true,
        positionActionsColumn: 'last',
        renderRowActions: ({ row }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                    <EditIcon />
                </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
                    <DeleteIcon />
                </IconButton>
                </Tooltip>
            </Box>  
        ),
        muiRowDragHandleProps: ({ table }) => ({
          onDragEnd: () => {
            const { draggingRow, hoveredRow } = table.getState();
            if (hoveredRow && draggingRow) {
              data.splice(
                (hoveredRow as MRT_Row<Person>).index,
                0,
                // @ts-ignore: Unreachable code error
                data.splice(draggingRow.index, 1)[0],
              );
              setData([...data]);
            }
          },
        }),
    });

    return (
        <MRT_TableContainer table={table} />
    )
}

export default TableEditQuestions;