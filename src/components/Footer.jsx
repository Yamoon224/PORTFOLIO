export default function Footer() {
  return (
    <footer className="py-8 border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-primary/20 text-primary p-1 rounded">
              <span className="text-xl font-bold">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-semibold">Yamoussa KEITA</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Yamoussa KEITA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
