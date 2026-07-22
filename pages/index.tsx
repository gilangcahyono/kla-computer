import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowUp,
  Download,
  File,
  SquarePen,
  Trash,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Home = () => {
  const files = [
    {
      name: "Microsoft Office Home 2024",
      size: "2.3 GB",
      lastModified: "2023-01-01",
    },
    {
      name: "Google Chrome",
      size: "135 MB",
      lastModified: "2026-08-17",
    },
    {
      name: "Mendelley",
      size: "11.4 MB",
      lastModified: "2023-01-01",
    },
  ];

  return (
    <Layout>
      {/* <Hero /> */}
      <main className="h-screen">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <hr className="my-3" />
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="bg-yellow-200 hover:bg-yellow-200">
              <TableHead className="flex items-center gap-1">
                Name <ArrowUp size={14} />
              </TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {files.map((file, idx) => (
              <TableRow key={idx} className="bg-gray-100 hover:bg-yellow-300">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <File size={20} />
                    <span>{file.name}</span>
                  </div>
                </TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>{file.lastModified}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon-lg">
                    <Download color="purple" />
                  </Button>
                  <Button variant="ghost" size="icon-lg">
                    <SquarePen color="orange" />
                  </Button>
                  <Button variant="ghost" size="icon-lg">
                    <Trash2 color="red" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </Layout>
  );
};

export default Home;
