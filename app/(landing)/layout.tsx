const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <main className="">{children}</main>
    </div>
  );
};
export default LandingLayout;
