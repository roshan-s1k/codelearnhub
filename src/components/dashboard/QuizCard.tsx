import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function QuizCard() {
  return (
    <div className='items-center flex justify-center'>
        <Dialog>
            <DialogTrigger>
            <div className="bg-blue-600 text-white text-xl font-semibold py-2 px-9 rounded-lg transition-all border-2 border-black hover:bg-blue-700 transform hover:-translate-y-1">
              AI Quizz Me
        </div>
            </DialogTrigger>
            <DialogContent className=" bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
                  
                  <DialogTitle className="text-2xl font-semibold text-gray-800 mb-4 w-auto">
                    AI generated quiz will be implemented later
                  </DialogTitle>
            </DialogContent>
        </Dialog>
     </div>
  )
}
