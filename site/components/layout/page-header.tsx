import { BreadcrumbItem } from "@/lib/types";
import { Breadcrumb } from "./breadcrumb";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : { backgroundColor: "rgb(30, 41, 59)" }
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center text-center">
        {breadcrumbs && (
          <div className="mb-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
