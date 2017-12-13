export class product{
    _id: string;
    name: string;
    
    image:  string;
    desc:  string;
    bid_amount:  number;
    min_bid_rate:  number;
    start_date : any;
    end_date :  any;
    date_time : any;
    intrested_ids: [{
        user_id:  string;
        
        date_time : any; 
    }];
    bidders: [{
        user_id: string;
        amount:  number;
        date_time : any; 
        bid_status : string; 
    }];
    is_bid_completed : boolean;
    starting_informed :boolean;
    closing_informed :boolean;
}