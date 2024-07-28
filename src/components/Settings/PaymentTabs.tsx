import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PaymentForm from "./PaymentForm";
import PaymentEdinar from "./PaymentEdinar";

const PaymentTabs = () => {
    return (
        <Tabs defaultValue="cc" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cc">Credit Card</TabsTrigger>
                <TabsTrigger value="d17">E-Dinar / D17</TabsTrigger>
            </TabsList>
            <TabsContent value="cc"><PaymentForm /></TabsContent>
            <TabsContent value="d17"><PaymentEdinar /></TabsContent>
        </Tabs>

    );
}

export default PaymentTabs;