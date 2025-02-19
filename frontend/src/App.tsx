import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LeadView from "./components/Lead/LeadView";
import "./theme/theme";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <LeadView />
    </QueryClientProvider>
  );
};

export default App;
