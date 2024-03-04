import { Card } from "./Card";
import TradingViewWidget from "./TradingViewWidget";
import { TrendingCard } from "./TrendingCard";

export function MainBody(){
    return (
        <div className="bg-slate-100">
            <div className="mx-8 my-4 font-medium text-s">
                Cryptocurencies Bitcoin
            </div>

            <div className="flex flex-row">
                <div className="mx-8 my-4 rounded-lg">
                    <TradingViewWidget />
                </div>

                <div>
                    <div className="my-4 mx-16">
                         <Card />
                     </div>

                     <div className="my-4 mx-16">
                         <TrendingCard />
                    </div>
                </div>
            </div>
        </div>
    )
}