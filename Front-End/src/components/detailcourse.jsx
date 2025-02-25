import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailCourse = () => {
    const { id } = useParams(); // ดึง id จาก URL
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/workoutprograms/workouts/${id}`);
                console.log("id", id);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCourse(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    if (loading) {
        return <p className="text-center text-xl text-blue-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">{course.programName}</h1>

            {course.exercises && course.exercises.length > 0 ? (
                course.exercises.map((exercise) => (
                    <div
                        key={exercise.exerciseId}
                        className="mb-6 p-4 border rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-300 max-w-3xl mx-auto"
                    >
                        <div className="mt-2">
                            <iframe
                                width="100%"
                                height="400"
                                src={exercise.videoUrl.replace("watch?v=", "embed/")}
                                title={exercise.exerciseName}
                                className="rounded-lg "
                                allowFullScreen
                            ></iframe>
                            <h3 className="text-xl font-semibold mt-6 mb-8">{exercise.exerciseName}</h3>
                            <p className="text-lg my-2 text-left">
                                <strong className="font-semibold">กล้ามเนื้อที่ใช้:</strong> {exercise.targetMuscle}
                            </p>
                            <p className="text-base mb-4 text-left break-words leading-relaxed">
                                <strong className="font-semibold text-lg">คำแนะนำการออกกำลังกาย:</strong> {exercise.description}
                            </p>

                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center">ไม่มีการออกกำลังกายสำหรับโปรแกรมนี้.</p>
            )}
        </div>
    );
};

export default DetailCourse;
