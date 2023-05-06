import { Injectable } from '@nestjs/common';

@Injectable()
export class SubTopicsService {
  private subTopics = [
    {
      name: 'Subtopic 1.1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Subtopic 1.2',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Subtopic 1.3',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Subtopic 1.4',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      name: 'Subtopic 1.5',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Subtopic 1.6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Subtopic 2.1',
      description:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    },
    {
      name: 'Subtopic 2.2',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      name: 'Subtopic 2.3',
      description:
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
    {
      name: 'Subtopic 2.4',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    },
    {
      name: 'Subtopic 2.5',
      description:
        'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
    {
      name: 'Subtopic 2.6',
      description: 'Et harum quidem rerum facilis est et expedita distinctio.',
    },
    {
      name: 'Subtopic 3.1',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    },
    {
      name: 'Subtopic 3.2',
      description: 'Omnis voluptas assumenda est, omnis dolor repellendus.',
    },
    {
      name: 'Subtopic 3.3',
      description:
        'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    },
    {
      name: 'Subtopic 3.4',
      description:
        'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    },
    {
      name: 'Subtopic 3.5',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Subtopic 3.6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Subtopic 4.1',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      name: 'Subtopic 4.2',
      description:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    },
    {
      name: 'Subtopic 4.3',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      name: 'Subtopic 4.4',
      description:
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
    {
      name: 'Subtopic 4.5',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    },
    {
      name: 'Subtopic 4.6',
      description:
        'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
  ];

  getAllSubTopics() {
    return this.subTopics;
  }
}
