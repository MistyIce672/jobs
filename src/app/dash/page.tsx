import { AreaChartHero } from "./AreaCharHero";
import { ComboChartHero } from "./ComboChartHero";
import { LineChartHero } from "./LineCharHero";

export default async function DashPage() {
    return (
        <div>
            <ComboChartHero />
            <LineChartHero />
        </div>
    )
    
}