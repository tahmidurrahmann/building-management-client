import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </div>
        </div>
    );
};

export default Loading;