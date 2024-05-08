"use client"

import { useParams, usePathname } from "next/navigation";

function FeedbackDetail() {
    const pathname = usePathname()
    console.log(pathname);
    const params = useParams()

    console.log(params);
    
    return (
        <div>
            FeedbackDetail
        </div>
    );
}

export default FeedbackDetail;