import { useEffect, useState } from "react";
import { useCountdown } from "usehooks-ts";
import ExpressBookingButton from "./components/ExpressBookingButton";
import Header from "./components/Header";
import Layout from "./components/Layout";
import TimeSetter from "./components/TimeSetter";
import { Button } from "./components/ui/button";
import { useScreenState } from "./hooks/useScreenState";

function calculateTotalSeconds(state: [number, number, number]) {
  const [hour, minute, seconds] = state;
  return hour * 3600 + minute * 60 + seconds;
}

const initialWheelState: [number, number, number] = [0, 0, 0];
function DefaultScreen() {
  const { customizingId, cook } = useScreenState();
  const isCustomizing = !!customizingId;
  const [wheelState, setWheelState] = useState(initialWheelState);
  return (
    <Layout>
      <div className="flex flex-wrap items-center gap-2 md:flex-column w-full">
        <Header />
        <div className="w-full">Express Cooking</div>
        <ExpressBookingButton id="1" />
        <ExpressBookingButton id="2" />
        <ExpressBookingButton id="3" />
      </div>

      {!isCustomizing && (
        <>
          <div className="w-full mt-16">Manual Timer</div>
          <TimeSetter wheelState={wheelState} setWheelState={setWheelState} />
          <div className="flex flex-wrap items-center gap-2 md:flex-column w-full justify-end mt-8">
            <Button
              onClick={() => cook(wheelState)}
              disabled={calculateTotalSeconds(wheelState) < 1}
            >
              Start
            </Button>
          </div>
        </>
      )}
    </Layout>
  );
}

function Count({ count }: { count: number }) {
  const countdownHour = Math.floor(count / 3600)
    .toString()
    .padStart(2, "0");
  const countdownMinute = Math.floor((count % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const countdownSeconds = Math.floor(count % 60)
    .toString()
    .padStart(2, "0");

  const countdownString = [
    countdownHour,
    countdownMinute,
    countdownSeconds
  ].join(":");

  return <div className="w-full mt-16">{countdownString}</div>;
}

function CookingIndicator({
  cooking,
  count
}: {
  cooking: boolean;
  count: number;
}) {
  if (count === 0) {
    return <div className="w-full">Cooking Complete</div>;
  }
  if (cooking) {
    return <div className="w-full">Cooking</div>;
  }
  return <div className="w-full">Cooking Paused</div>;
}

function CookingScreen() {
  const { timer, changePage } = useScreenState();
  const [cooking, setCooking] = useState(true);
  const initialCountdown = calculateTotalSeconds(timer);
  const [count, { startCountdown, stopCountdown }] = useCountdown({
    countStart: initialCountdown
  });

  useEffect(() => {
    startCountdown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap items-center gap-2 md:flex-column w-full">
        <CookingIndicator cooking={cooking} count={count} />
        <Count count={count} />

        <div className="flex flex-wrap items-center gap-2 md:flex-column w-full justify-end mt-8">
          {cooking ? (
            <Button
              onClick={() => {
                setCooking(false);
                stopCountdown();
              }}
            >
              Pause
            </Button>
          ) : (
            <Button
              onClick={() => {
                setCooking(true);
                startCountdown();
              }}
            >
              Resume
            </Button>
          )}
          <Button onClick={() => changePage("")}>Stop</Button>
        </div>
      </div>
    </Layout>
  );
}

function App() {
  const { page } = useScreenState();
  switch (page) {
    case "cooking":
      return <CookingScreen />;
    default:
      return <DefaultScreen />;
  }
}

export default App;
