import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 8212jje812</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">Tiago Vieira</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (87) 99999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                tiaguito@email.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">há 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
