import * as React from "react"

import { ny } from "~/lib/utils"

const Table = React.forwardRef(({ className, ...props }, ref) => (
   <div className="relative w-full overflow-auto">
      <table
         ref={ref}
         className={ny("w-full caption-bottom text-sm", className)}
         {...props} />
   </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
   <thead ref={ref} className={ny("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
   <tbody
      ref={ref}
      className={ny("[&_tr:last-child]:border-0", className)}
      {...props} />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
   <tfoot
      ref={ref}
      className={ny("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
      {...props} />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
   <tr
      ref={ref}
      className={ny(
         "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
         className
      )}
      {...props} />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
   <th
      ref={ref}
      className={ny(
         "text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
         className
      )}
      {...props} />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
   <td
      ref={ref}
      className={ny("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
      {...props} />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
   <caption
      ref={ref}
      className={ny("text-muted-foreground mt-4 text-sm", className)}
      {...props} />
))
TableCaption.displayName = "TableCaption"

export {
   Table,
   TableHeader,
   TableBody,
   TableFooter,
   TableHead,
   TableRow,
   TableCell,
   TableCaption,
}
