import ExpressBookingButton from "./components/ExpressBookingButton";
import Header from "./components/Header";
import Layout from "./components/Layout";
import TimeSetter from "./components/TimeSetter";
import { Button } from "./components/ui/button";
import { useScreenState } from "./hooks/useScreenState";

function DefaultScreen() {
  const { changePage, customizingId } = useScreenState();
  const isCustomizing = !!customizingId;
  return (
    <Layout>
      <div className="flex flex-wrap items-center gap-2 md:flex-column w-full">
        <Header />
        <ExpressBookingButton id="1">1:00</ExpressBookingButton>
        <ExpressBookingButton id="2">2:00</ExpressBookingButton>
        <ExpressBookingButton id="3">3:00</ExpressBookingButton>
      </div>
      {!isCustomizing && <TimeSetter />}

      {!isCustomizing && (
        <div className="flex flex-wrap items-center gap-2 md:flex-column w-full justify-end mt-8">
          <Button onClick={() => changePage("cooking")}>Start</Button>
        </div>
      )}
    </Layout>
  );
}

function App() {
  const { page } = useScreenState();
  switch (page) {
    case "cooking":
      return null;
    default:
      return <DefaultScreen />;
  }
}

export default App;
