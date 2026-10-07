import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const members = [
  {
    name: "Olivia Rhye",
    email: "olivia@untitled.studio",
    initials: "OR",
    role: "Owner",
    lastActive: "Just now",
    status: "Active",
  },
  {
    name: "Phoenix Baker",
    email: "phoenix@untitled.studio",
    initials: "PB",
    role: "Admin",
    lastActive: "2 hours ago",
    status: "Active",
  },
  {
    name: "Demi Wilkinson-Castellanos",
    email: "demi.wilkinson-castellanos@untitled.studio",
    initials: "DW",
    role: "Editor",
    lastActive: "Never",
    status: "Invited",
  },
  {
    name: "Drew Cano",
    email: "drew@untitled.studio",
    initials: "DC",
    role: "Viewer",
    lastActive: "14 Jun 2026",
    status: "Deactivated",
  },
]

const portrait =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#e5e5e5"/><circle cx="80" cy="60" r="30" fill="#a3a3a3"/><ellipse cx="80" cy="152" rx="60" ry="55" fill="#737373"/></svg>'
  )

function TableWithAvatars() {
  return (
    <div className="w-full overflow-hidden rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Last active</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.email}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar
                    src={member.status === "Invited" ? null : portrait}
                    alt={member.name}
                    initials={member.initials}
                  />
                  <div className="flex max-w-60 min-w-0 flex-col">
                    <span className="truncate font-medium">{member.name}</span>
                    <span
                      className="truncate text-muted-foreground"
                      title={member.email}
                    >
                      {member.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell className="text-muted-foreground">
                {member.lastActive}
              </TableCell>
              <TableCell>
                <Badge
                  size="sm"
                  variant={member.status === "Active" ? "outline" : "secondary"}
                >
                  {member.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableWithAvatars
