import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    {
      name: 'Topic One',
      subtopics: [
        { name: 'Subtopic 1.1' },
        { name: 'Subtopic 1.2' },
        { name: 'Subtopic 1.3' },
        { name: 'Subtopic 1.4' },
        { name: 'Subtopic 1.5' },
        { name: 'Subtopic 1.6' },
      ],
    },
    {
      name: 'Topic Two',
      subtopics: [
        { name: 'Subtopic 2.1' },
        { name: 'Subtopic 2.2' },
        { name: 'Subtopic 2.3' },
        { name: 'Subtopic 2.4' },
        { name: 'Subtopic 2.5' },
        { name: 'Subtopic 2.6' },
      ],
    },
    {
      name: 'Topic Three',
      subtopics: [
        { name: 'Subtopic 3.1' },
        { name: 'Subtopic 3.2' },
        { name: 'Subtopic 3.3' },
        { name: 'Subtopic 3.4' },
        { name: 'Subtopic 3.5' },
        { name: 'Subtopic 3.6' },
      ],
    },
    {
      name: 'Topic Four',
      subtopics: [
        { name: 'Subtopic 4.1' },
        { name: 'Subtopic 4.2' },
        { name: 'Subtopic 4.3' },
        { name: 'Subtopic 4.4' },
        { name: 'Subtopic 4.5' },
        { name: 'Subtopic 4.6' },
      ],
    },
  ];

  getAllTask() {
    return this.tasks;
  }
}
