import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Task } from '@/types/task';
import { Calendar, Edit, Trash2, Clock } from 'lucide-react';
import { format, isAfter, isBefore, isToday } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  const dueDate = new Date(task.due_date);
  const now = new Date();
  
  const isOverdue = isBefore(dueDate, now) && !isToday(dueDate);
  const isDueToday = isToday(dueDate);
  const isDueSoon = isAfter(dueDate, now) && isBefore(dueDate, new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000)); // 3 days

  const getStatusColor = () => {
    if (isOverdue) return 'text-destructive';
    if (isDueToday) return 'text-warning';
    if (isDueSoon) return 'text-primary';
    return 'text-muted-foreground';
  };

  const getStatusText = () => {
    if (isOverdue) return 'Overdue';
    if (isDueToday) return 'Due today';
    if (isDueSoon) return 'Due soon';
    return 'Upcoming';
  };

  return (
    <Card className="group hover:shadow-medium transition-smooth border-0 shadow-soft">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg leading-tight text-card-foreground group-hover:text-primary transition-smooth">
            {task.title}
          </h3>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-smooth">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(task)}
              className="h-8 w-8 p-0 hover:bg-primary-light hover:text-primary"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(task.id)}
              className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {task.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {format(dueDate, 'MMM dd, yyyy')}
            </span>
          </div>
          <div className={`flex items-center gap-1 text-sm font-medium ${getStatusColor()}`}>
            <Clock className="h-3 w-3" />
            <span>{getStatusText()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;