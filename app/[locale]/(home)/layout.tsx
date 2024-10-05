import LayoutTemplate from "@/components/layout/home2-template"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <LayoutTemplate>
            {children}
        </LayoutTemplate>

    )
  }