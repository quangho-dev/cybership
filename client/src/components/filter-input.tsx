"use client";

import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const FilterInput = () => {
  const filterParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(filterParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center py-4 w-3/12">
        <Input
          placeholder="Filter by customer's name / order's status"
          defaultValue={filterParams.get("query")?.toString()}
          onChange={(e) => {
            handleFilter(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default FilterInput;
